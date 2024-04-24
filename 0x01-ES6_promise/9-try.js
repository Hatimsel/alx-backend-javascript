export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push([result, 'Guardrail was processed']);
    return queue;
  } catch (error) {
    queue.push([error.message, 'Guardrail was processed']);
    return queue;
  }
}
