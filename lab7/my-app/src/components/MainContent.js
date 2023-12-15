import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pStyles: { backgroundColor: "white", color: "black" },
            liStyles: { backgroundColor: "white", color: "black" },
            lastClickedElement: null,
        };
    }
    pClick = () => {
        this.setState(() => ({
            pStyles: { backgroundColor: "red", color: "white" },
            liStyles: { backgroundColor: "blue", color: "yellow" },
            lastClickedElement: "p",
        }));
    };

    liClick = () => {
        this.setState(() => ({
            pStyles: { backgroundColor: "red", color: "white" },
            liStyles: { backgroundColor: "blue", color: "yellow" },
            lastClickedElement: "li",
        }));
    };
    render() {
        const { pStyles, liStyles, lastClickedElement } = this.state;
        return (
            <main>
                <div>
                    <p>Хоббі:</p>
                    <ul>
                        <li>Комп'ютерні ігри</li>
                        <li>Баскетбол</li>
                        <li>Колекціонування Хотвілс</li>
                    </ul>
                </div>
                <div>
                    <p style={lastClickedElement === "p" ? liStyles : pStyles} onClick={this.pClick}>
                        Улюблені фільми:
                    </p>
                    <ol>
                        <li style={lastClickedElement === "li" ? liStyles : pStyles} onClick={this.liClick}>
                            Престиж
                        </li>
                        <li>Острів проклятих</li>
                        <li>Втеча із Шоушенка</li>
                    </ol>
                </div>
            </main>
        );
    }
}

export default Content;
