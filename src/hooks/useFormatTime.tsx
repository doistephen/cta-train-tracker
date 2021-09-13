export default function formatDate(dateString) {
  const options = { hour: 'numeric', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString(undefined, options); // @ts-ignore
}
