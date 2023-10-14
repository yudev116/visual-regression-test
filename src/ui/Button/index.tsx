import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

type Props = React.ComponentPropsWithRef<'button'>;

export const Button = forwardRef(({ children, disabled }: Props) => {
	return (
		<button
			className={styles.button}
			disabled={disabled}>
			{children}
		</button>
	);
});
