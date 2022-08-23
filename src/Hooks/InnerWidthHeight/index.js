import React from "react";
import ViewportProvider, { useViewportContext } from "./ViewportProvider";

const useViewport = () => {
    const { width, height } = useViewportContext();
    return { width, height };
};

const MobileComponent = () => <span>"Hmmm... Why is your screen so small?"</span>;
const DesktopComponent = () => <span>"Wow, your screen is big!"</span>;

const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
    console.log(width)
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function App() {
    return (
        <ViewportProvider>
            <MyComponent />
        </ViewportProvider>
    );
}
