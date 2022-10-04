
import React from "react";
import { useTranslation } from 'react-i18next'
export const Dashboard = () => {
    const {t} =  useTranslation();

    return(
        <div>
            <h2>{t("Hi Guys")}.</h2>
        </div>
    )
}