import { Timeline } from "@/pages/timeline/Timiline"
import { BrowserRouter, Route, Routes, /* Navigate */  } from "react-router-dom"

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
    );
}