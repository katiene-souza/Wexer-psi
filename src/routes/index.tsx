import { Timeline } from "@/pages/timeline/Timiline"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Review } from "@/pages/review/Review";
import { Assessment } from "@/pages/assessment/Assesment";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Timeline />} />
                <Route path="/review" element={<Review />} />
                <Route path="/assessment" element={<Assessment />} />
            </Routes>
        </BrowserRouter>
    );
}