const getConfig = `curl --location --request GET '{apiUrl}/device/{deviceId}/config' \\
--header 'Authorization: apikey {apiKey}' \\
--header 'Content-Type: text'
`

const getConfigDescription = `Fetch device configuration from µConfy backend. Parameters can be set on
µConfy portal, and your device can use these parameters to alter it's behaviour at runtime.
Your device might want to pull the configuration periodically, or upon init.
`


const postLogs = `curl --location --request POST '{apiUrl}/api/device/{deviceId}/logs' \\
--header 'Authorization: apikey {apiKey}' \\
--header 'Content-Type: application/json' \\
--data-raw '{ "Logs": "CkRldmljZSBzdGFydGVkCkRldmljZSBzdGFydGVkCkRldmljZSBzdGFydGVkCkRldmljZSBzdGFydGVkCkRldmljZSBzdGFydGVkCkRldmljZSBzdGFydGVkCkRldmljZSBzdGFydGVk"}'
`

const postLogsDescription = `Store device logs in µConfy. Your device might want to send log entries from time
to time. You can see your device's logs in µConfy Console. When posting log entries, your device must pack the "Logs"
parameter using base64 encoding.
`

export { getConfig, postLogs }
export { getConfigDescription, postLogsDescription }
