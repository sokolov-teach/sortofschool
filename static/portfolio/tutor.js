/**
 * Production Tutor API for Iframe Simulations
 * 
 * This connects iframe simulations to the parent window's chat system.
 * Provides the same API as the development version but routes to parent.
 */

window.tutor = (function() {
  
  function getParentTutor() {
    // Check if running in iframe and parent has tutor API
    if (window.parent && window.parent !== window && window.parent.tutor && typeof window.parent.tutor.event === 'function') {
      return window.parent.tutor
    }
    return null
  }

  function isReady() {
    return !!getParentTutor()
  }

  function waitForReady(callback, maxWait = 10000) {
    if (isReady()) {
      callback()
      return
    }
    
    const startTime = Date.now()
    const poll = setInterval(() => {
      if (isReady()) {
        clearInterval(poll)
        callback()
      } else if (Date.now() - startTime > maxWait) {
        clearInterval(poll)
        console.error('Tutor API timeout: Parent chat system not ready')
      }
    }, 100)
  }

  return {
    /**
     * Send an event to the parent window's tutor system
     * @param {string} type - Event type (e.g., 'static_events', 'dynamic_events', 'ui_events', 'context_events')
     * @param {string} key - The event key from your YAML configuration
     * @param {Object} params - Optional parameters for template substitution
     */
    event: function(type, key, params = {}) {
      const parentTutor = getParentTutor()
      if (!parentTutor) {
        console.error('Tutor API not ready. Parent window chat system not available.')
        return
      }
      
      try {
        parentTutor.event(type, key, params)
      } catch (error) {
        console.error('Error sending tutor event to parent:', error)
      }
    },

    /**
     * Track a simulation run with score
     * @param {number} score - The score achieved in this run
     */
    run: function(score) {
      const parentTutor = getParentTutor()
      if (!parentTutor) {
        console.error('Tutor API not ready. Parent window chat system not available.')
        return
      }
      
      try {
        if (typeof parentTutor.run === 'function') {
          parentTutor.run(score)
        } else {
          console.warn('Run tracking not available in parent window')
        }
      } catch (error) {
        console.error('Error tracking run with parent:', error)
      }
    },

    /**
     * Check if the tutor API is ready
     * @returns {boolean} True if ready to use
     */
    ready: isReady,

    /**
     * Wait for the tutor API to be ready, then execute callback
     * @param {Function} callback - Function to execute when ready
     * @param {number} maxWait - Maximum wait time in milliseconds (default: 10000)
     */
    onReady: waitForReady
  }
})()

// Auto-initialization message 