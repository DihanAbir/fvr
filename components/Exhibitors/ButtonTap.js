import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ButtonTap = () => {
    const buttons = [
        {
          btnName: "Participent",
          className: "learn_more_btn",
        },
        {
          btnName: "Sponser",
          className: "exhibitor_btn",
        },
        {
          btnName: "Workshop",
          className: "exhibitor_btn",
        },
      ];
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
            {buttons.map((btn, index) => (
              <Button key={index} className={btn.className}>
                {btn.btnName}
              </Button>
            ))}
          </ButtonGroup>
        </div>
    );
};

export default ButtonTap;