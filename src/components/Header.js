import React, { useState } from "react";

const Header = () => {

    const [ text, setText ] = useState('');

    return (
        <header>
            <div class="header-title">IP Address Tracker</div>
            <form>
                <input type="text" placeholder="Search for any IP address of domain" value={text} onChange={e => setText(e.target.value)}/>
                <button></button>
            </form>
        </header>
    );
};

export default Header;
