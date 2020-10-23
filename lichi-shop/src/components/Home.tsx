import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className={"bg-img"}></div>
                <div className={"bg-img2"}></div>
                <div id="contacts">
                    <ul>
                        <li><a href="https://lichi.com/links/redir-1/?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Instagram</a></li>
                        <li><a href="https://t.me/lichi_brand?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Telegram</a></li>
                        <li><a href="https://vk.com/lichi_brand?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Vk</a></li>
                        <li><a href="https://www.pinterest.com/lichi_brand/?utm_source=footer&utm_medium=site&utm_campaign=internal" target="_blank">Pinterest</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
