import { motion } from 'framer-motion';
import React from "react";

const PageAnimate = ({ children, nostyle }) => {
    return (
        <motion.div
            initial={{ y: "100px", }}
            animate={{ y: "0px", }}
            exit={{ opacity: 0 }}
            transition={{
                type: "spring",
                duration: 0.2,
            }}
            className={`${nostyle ? '' : 'w-full p-4 flex flex-col gap-8'}`}
        >
            {children}
        </motion.div>
    );
};

export default PageAnimate;