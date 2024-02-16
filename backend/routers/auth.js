const express = require("express");
const router = express.Router();
const { check, validationResult, checkSchema } = require("express-validator");
const sendCodeToPhone = require("../services/sendCodeToPhone");
const jwt = require("jsonwebtoken");
const { getUserByEmail, getUserById } = require("../services/storage");

const privateKey = "supersecretkeyformyapp";

router.post(
  "/login",
  async (req, res, next) => {
    await checkSchema({
      email: { isEmail: true, errorMessage: "Поле не является Email" },
      password: { isLength: { options: { min: 10 } }, errorMessage: "Пароль не может быть меньше 10 символов" },
    }).run(req);
    const result = validationResult(req);
    //console.log(result)
    if (!result.isEmpty()) {
      console.log("Failed validation");
      return res.json({ status: "error", errors: result.errors });
    }
    next();
  },

  async function (req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ status: "error", message: "нет нужной информации" });
    }
    const founduser = await getUserByEmail(req.body.email.toLowerCase());
    if (founduser && founduser.attributes.password == req.body.password) {
      req.session.founduser = founduser;
      console.log(req.session.founduser)
      try {
        req.session.pincode = await sendCodeToPhone(founduser.attributes.phone);
        return res.json({ status: "ok", message: "Ожидается пин код" });
      } catch (error) {
        return res.status(500).json({ status: "error", message: "Не удалось совершить звонок" });
      }
    } else {
      return res.json({ status: "error", message: "Логин или пароль не верный" });
    }
  }
);
router.post(
  "/logincode",
  async (req, res, next) => {
    await checkSchema({
      pincode: { isLength: { options: { min: 4, max: 11 } }, errorMessage: "Код не может быть меньше 4 символов" },
    }).run(req);
    const result = validationResult(req);
    //console.log(result)
    if (!result.isEmpty()) {
      console.log("Failed validation");
      return res.json({ status: "error", errors: result.errors });
    }
    next();
  },
  async (req, res) => {
    console.log(req.session)
    if (!req.body.pincode) {
      return res.json({ status: "error", message: "нет нужной информации" });
    }
    if (!req.session.founduser) {
      return res.json({ status: "error", message: "Не найден пользователь" });
    }
    if (req.session.pincode == req.body.pincode) {
        const userjwt = jwt.sign({ id: req.session.founduser.id, email: req.session.founduser.attributes.email, phone: req.session.founduser.attributes.phone }, privateKey);
        return res.json({ status: "ok", jwt: userjwt, userid: req.session.founduser.id,email: req.session.founduser.attributes.email, phone: req.session.founduser.attributes.phone });
    }else{
        return res.json({ status: "error", message: "Не верный пин код" });
    }
  }
);
router.post("/getuser", async function (req, res) {
  if (req.body.id) {
    try {
      const foundUser = await getUserById(req.body.id);
      return res.json({ status: "ok", data: foundUser });
    } catch (error) {
      console.log(error);
      return res.json({ status: "error", error });
    }
  }
  return res.status(400).json({ status: "error", message: "нет нужной информации" });
});

router.post("/phonecode", function (req, res) {});

module.exports = router;
