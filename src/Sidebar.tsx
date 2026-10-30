export default function TopNav({ status }) {
  const isFinal = status === 'Final';
  return (
    <nav className="topnav">
      <h1><span>TP</span> Local File Builder</h1>
      <span className={`status-badge ${isFinal ? 'success' : ''}`}>{status}</span>
    </nav>
  );
}
