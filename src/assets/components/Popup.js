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
                        <h1>Popup</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloremque, ea, eius eos error est fugiat ipsum laboriosam magnam nam natus neque nesciunt nihil nulla odio omnis pariatur quae quas quia quisquam quod ratione repellat repudiandae sapiente sed sequi sint sit suscipit temporibus voluptate voluptates!</p>
                        <input type="button" value="Close" onClick={toggle} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
