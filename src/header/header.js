import React, {Component} from 'react';
import header from './header.css'

class Header extends Component {
    render() {
        return (
            <div>
                    <header className="Haupt">
                        <nav className="nav">
                            <ul>
                                <div className="ml">
                                </div>
                                <li>
                                    О нас
                                </li>
                                <li>
                                    Объекты
                                </li>
                                <li>
                                    Новости
                                </li>
                                <li>
                                    Клиентам
                                </li>
                                <li>
                                    Оплата
                                </li>
                                <li>
                                    Коммерция
                                </li>
                                <li>

                                    Контакты | 0 (555) 555-555
                                </li>
                            </ul>
                            <div>
                                <img className="img"
                                     src="https://static.tildacdn.com/tild3461-3563-4663-b766-663864623139/-/resize/504x/elite-house-logo.png"
                                     alt="logo Elite-House"/>
                            </div>
                        </nav>
                    </header>
            </div>

        );
    }
}

export default Header;