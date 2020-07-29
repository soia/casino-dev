import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { compose } from '../../../utils';
import Button from '../../small-components/button';
import Field from '../../small-components/field';
import ModalWindow from '../../small-components/modal-window/modal-widow';
import orangeButton from './images/button.svg';
import style from './login.module.scss';

class Login extends PureComponent {
    static defaultProps = {
        t: () => {},
    };

    static propTypes = {
        t: PropTypes.func,
    };

    state = {};

    render() {
        const { t } = this.props;
        const customStyles = {
            content: {
                maxWidth: '50vw',
            },
        };

        const orangeButtonStyle = {
            backgroundImage: `url(${orangeButton})`,
            backgroundSize: 'cover',
        };

        return (
            <ModalWindow isOpen style={customStyles}>
                <h3 className={style.signIn__title}>{t('header.signIn')}</h3>
                <form className={style.signIn__form} autoComplete="off">
                    <div className={style.signIn__inputWrapper}>
                        <Field
                            id="email"
                            type="email"
                            placeholder={t('auth.typeEmail')}
                            name="email"
                            // value={username}
                            // onChange={this.InputOnchange}
                            // error={usernameError}
                            inputStyle={style.signIn__input}
                        />
                    </div>
                    <div className={style.signIn__inputWrapper}>
                        <Field
                            id="password"
                            type="password"
                            placeholder={t('auth.typePassword')}
                            name="userPasswordLogin"
                            // value={username}
                            // onChange={this.InputOnchange}
                            // error={usernameError}
                            inputStyle={style.signIn__input}
                        />
                    </div>
                    <div className={style.signIn__forgotPassword}>
                        {t('auth.forgotPassword')}
                    </div>
                    <Button
                        className={style.signIn__submitBtn}
                        type="button"
                        style={orangeButtonStyle}
                    >
                        {t('header.signIn')}
                    </Button>
                    <div className={style.signIn__registration}>
                        {t('header.registration')}
                    </div>
                </form>
            </ModalWindow>
        );
    }
}

export default compose(
    withTranslation(),
)(Login);
