import React, { Fragment } from 'react';
import { Button, PrimaryButton } from '../Button/Button';

import './modal.scss';

export const Alert = ({ title, overlay = true, overlayClose = true, close, ...props }) => (
  <Fragment>
    {overlay && <div className="modal__overlay" onClick={overlayClose && close} />}
    <div className="modal">
      <h3 className="modal__title">{title}</h3>
      <div className="modal__content">{props.children}</div>
      <div className="modal__footer">
        <PrimaryButton className="modal__button" onClick={close}>
          Close
        </PrimaryButton>
      </div>
    </div>
  </Fragment>
);

export const Prompt = ({ title, overlay = true, overlayClose = true, close, confirm, ...props }) => (
  <Fragment>
    {overlay && <div className="modal__overlay" onClick={overlayClose ? close : undefined} />}
    <div className="modal">
      <h3 className="modal__title">{title}</h3>
      <div className="modal__content">{props.children}</div>
      <div className="modal__footer">
        <PrimaryButton className="modal__button" onClick={confirm}>
          Confirm
        </PrimaryButton>
        <Button className="modal__button" onClick={close}>
          Cancel
        </Button>
      </div>
    </div>
  </Fragment>
);
