document.addEventListener('DOMContentLoaded', () => {
  const inputsComponents: HTMLInputElement[] = Array.from(
    document.querySelectorAll<HTMLInputElement>(
      'input[type="number"].app-elem-input',
    ),
  );

  // Function to calculate the result
  const resultCal = (): void => {
    const result = inputsComponents.reduce(
      (acc, input) => acc + (input.valueAsNumber || 0),
      0,
    );

    const output = document.querySelector<HTMLInputElement>('.app-elem-result');
    if (output) {
      output.value = `${result}`;
    }
  };

  // Add event listeners to each input component
  inputsComponents.forEach((inputComponent) => {
    inputComponent.addEventListener('change', resultCal);
  });

  // Initial calculation
  resultCal();
});
