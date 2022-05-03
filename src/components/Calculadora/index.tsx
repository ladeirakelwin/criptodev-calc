import React, { useState } from 'react';
import { Background, Container, Content } from './style';

const Calculadora: React.FC = () => {
	const [value, setValue] = useState('');
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
		const updateValue = value + newValue;
		setValue(updateValue);
	}

	function insertOperator(newOperator: string): void {
		const size = currentProduct.length - 1;

		if (value) {
			const firstTimes = size === 0 && currentProduct[0] === '0';
			const otherTimes = size > 0 && currentProduct[size].match(/\D/g) && value;
			if (firstTimes) {
				const currentValue = Math.sign(Number(value)) === -1 ? `(${value})` : value;
				setCurrentProduct([]);
				setCurrentProduct([currentValue, newOperator]);
				setValue('');
			} else if (otherTimes) {
				const currentValue = Math.sign(Number(value)) === -1 ? `(${value})` : value;
				setCurrentProduct([...currentProduct, currentValue, newOperator]);
				setValue('');
			}
		} else {
			alert('Insira algum valor!!!');
		}
	}

	function totalizing(currentValue: string): void {
		const hasOperator = currentProduct.findIndex((item) => ['*', '/', '-', '+'].includes(item));
		if (currentProduct.length < 2 || !(hasOperator !== -1) || !currentValue) {
			alert('A totalização tem que começar e terminar com um valor e possuir um operador!!!');
		} else {
			const newValue = [...currentProduct, currentValue];
			const size = newValue.length;
			const cleanValues = newValue.map(item => item.replace(/(\(|\))/g, ''))

			if (size > 1) {
				const allValues = { values: cleanValues, TD: true, final: '' };

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

				alert(`Resultado da operação é:\n${currentProductFormatted() + value} = ${allValues.values[0]}`)

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
							<button onClick={() => clearValue()} type="button" className="operator">
								C
							</button>
							<button
								onClick={() => invertPole(value)}
								type="button"
								className="operator"
							>
								&#43;/&minus;
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

							<button
								onClick={() => getValue('.')}
								type="button"
								className="operator"
							>
								&bull;
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
