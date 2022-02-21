import React from 'react';
import { Card } from 'react-bootstrap';

export function Illustration() {
    const sty = { width: "300px", height: "300px" };
    return (
        <div className="illustration">



            <Card border="light">
                <Card.Header><h4>Illustrations</h4></Card.Header>
                <Card.Body>

                    <Card.Text>
                        <img style={sty} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                            alt="illlustration" /><br />
                        Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
}