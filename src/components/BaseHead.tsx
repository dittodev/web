import Script from "next/script";
import { FC } from "react";

const BaseHead: FC = () => {
    return (
        <Script async src="https://analytics.gurkz.me/script.js" data-website-id="342dbb20-0fc6-4a48-aade-a0823e9187b3" />
    )
}

export { BaseHead }