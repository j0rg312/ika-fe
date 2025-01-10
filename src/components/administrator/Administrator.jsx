import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AdminModal from "./adminModal/AdminLogin";

const Administrator = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleKeyDown = useCallback((event) => {
        if (event.ctrlKey && event.key === "ñ") {
            setIsModalOpen(true);
        }
    }, [navigate]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className="">
            {isModalOpen && <AdminModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Administrator;
