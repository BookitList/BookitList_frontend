import React, { useState, useEffect } from "react";

import heartFill from "img/heartFillIcon.svg";
import heartEmpty from "img/heartGrayIcon.svg";

const LikeButton = ({ like, onClick }) => {
    return (
        <Heart src={like?heartFill:heartEmpty} onClick={onClick} />
    );
};

export default LikeButton;