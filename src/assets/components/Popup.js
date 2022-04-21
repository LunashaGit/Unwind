import React from "react";

const Popup = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <h1>test</h1>
            <input type="button" value="Open Popup" onClick={toggle} />
            {isOpen && (
                <div className="popup">
                    <div className="popup_inner">
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
