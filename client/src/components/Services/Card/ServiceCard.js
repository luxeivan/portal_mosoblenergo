import React from 'react'
import styles from './ServiceCard.module.css'
import { Card } from "antd";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, url, }) {
    return (
        <Link to={url} className={styles.serviceLink}>
            <Card className={styles.serviceCard}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
            </Card>
        </Link>
    )
}
