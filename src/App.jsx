import './App.css'

function App({ canvasContext }) {
  if (!canvasContext) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Canvas POC</h3>
        <p>App not loaded from Salesforce</p>
      </div>
    )
  }

  const { context, client } = canvasContext

  return (
    <div style={{ padding: '20px' }}>
      <h3>Salesforce Canvas POC</h3>

      <p>
        <strong>User:</strong> {context.user.userName}
      </p>

      <p>
        <strong>Org:</strong> {context.organization.organizationName}
      </p>

      <p>
        <strong>Record Id:</strong>{' '}
        {context.environment?.parameters?.recordId || 'N/A'}
      </p>

      <p>
        <strong>Instance URL:</strong> {client.instanceUrl}
      </p>
    </div>
  )
}

export default App

