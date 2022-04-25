import React, { useState } from 'react';
import { Background, Container, Content } from './style';

const Calculadora: React.FC = () => {
	const [value, setValue] = useState('0');
	const [currentProduct, setCurrentProduct] = useState(['0']);

	function operationResult(a: string, operator: string, b: string): string {
		switch (operator) {
			case '+':
				return String(Number(a) + Number(b));
			case '-':
				return String(Number(a) - Number(b));
			case '/':
				return String(Number(a) / Number(b));
			case '*':
				return String(Number(a) * Number(b));
			default:
				return '0';
		}
	}

	function invertPole(currentValue: string) {
		if (currentValue.match(/-/)) {
			const newValue = currentValue.replace('-', '');
			setValue(newValue);
		} else {
			const newValue = '-' + value;
			setValue(newValue);
		}
	}

	function currentProductFormatted(): string {
		return currentProduct.join(' ');
	}

	function allClean() {
		setValue('');
		setCurrentProduct(['0']);
	}

	function clearValue(): void {
		const newValue = value;
		const newValueSeparated = newValue.split('');
		newValueSeparated.pop();

		const newValueJoined = newValueSeparated.join('');

		setValue(newValueJoined);
	}

	function getValue(newValue: string): void {
		const updateValue = String(Number(value + newValue));
		setValue(updateValue);
	}

	function insertOperator(newOperator: string): void {
		const size = currentProduct.length - 1;

		if (size === 0 && currentProduct[0] === '0') {
			setCurrentProduct([]);
			setCurrentProduct([value, newOperator]);
			setValue('');
		} else if (size > 0 && currentProduct[size].match(/\D/g) && value) {
			setCurrentProduct([...currentProduct, value, newOperator]);
			setValue('');
		}
	}

	function totalizing(currentValue: string): void {
		const hasOperator = currentProduct.findIndex((item) => item in ['*', '/', '-', '+']);
		if (!currentValue || hasOperator !== -1) {
			alert('A totalização tem q ser feita com no mínimo 2 valores e um operador!!!');

		} else {
			const newValue = [...currentProduct, currentValue];

			const size = newValue.length;

			if (size > 1) {
				const allValues = { values: newValue, TD: true, final: '' };

				while (allValues.values.length > 1) {
					const hasTorD = allValues.values.findIndex(
						(item) => item === '*' || item === '/'
					);

					if (hasTorD !== -1) {
						const [start, end] = [hasTorD - 1, hasTorD + 2];
						const [value1, operator, value2] = allValues.values.slice(start, end);
						const result: string = operationResult(value1, operator, value2);
						allValues.values.splice(start, 3, result);
					} else {
						const [start, end] = [0, 3];
						const [value1, operator, value2] = allValues.values.slice(start, end);
						const result: string = operationResult(value1, operator, value2);
						allValues.values.splice(start, 3, result);
					}
				}

				setCurrentProduct(() => ['0']);
				setValue(() => allValues.values['0']);
			}
		}
	}

	return (
		<Background>
			<Container>
				<Content>
					<div id="display">
						<input
							type="text"
							id="subtotal"
							disabled
							value={currentProductFormatted()}
						/>
						<input type="text" id="total" disabled value={value} />
					</div>

					<div id="keypad">
						<div className="line">
							<button onClick={() => allClean()} type="button" className="operator">
								AC
							</button>
							<button
								onClick={() => invertPole(value)}
								type="button"
								className="operator"
							>
								&#43;/&minus;
							</button>
							<button
								onClick={() => insertOperator('%')}
								type="button"
								className="operator"
							>
								%
							</button>
							<button
								onClick={() => insertOperator('/')}
								type="button"
								className="operator"
							>
								&frasl;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('7')} type="button">
								7
							</button>
							<button onClick={() => getValue('8')} type="button">
								8
							</button>
							<button onClick={() => getValue('9')} type="button">
								9
							</button>
							<button
								onClick={() => insertOperator('*')}
								type="button"
								className="operator"
							>
								&times;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('4')} type="button">
								4
							</button>
							<button onClick={() => getValue('5')} type="button">
								5
							</button>
							<button onClick={() => getValue('6')} type="button">
								6
							</button>
							<button
								onClick={() => insertOperator('-')}
								type="button"
								className="operator"
							>
								&minus;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('1')} type="button">
								1
							</button>
							<button onClick={() => getValue('2')} type="button">
								2
							</button>
							<button onClick={() => getValue('3')} type="button">
								3
							</button>
							<button
								onClick={() => insertOperator('+')}
								type="button"
								className="operator"
							>
								&#43;
							</button>
						</div>
						<div className="line">
							<button onClick={() => getValue('0')} type="button">
								0
							</button>
							<button onClick={() => clearValue()} type="button" className="operator">
								C
							</button>
							<button
								onClick={() => totalizing(value)}
								type="button"
								className="operator"
								id="equals"
							>
								&#61;
							</button>
						</div>
					</div>
				</Content>
			</Container>
		</Background>
	);
};

export default Calculadora;
