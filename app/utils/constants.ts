export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount'
export const DAEMON = '@@saga-injector/daemon'
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount'

// amount of time we need to wait before fetching data from server, right after creation/deletion
// eg. user adds a device => wait db propagation time => fetch device list
// if we do not delay fetching, db might return stale data
export const DB_PROPAGATION_SECONDS = 2
