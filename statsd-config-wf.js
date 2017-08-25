{
    backends: ["./backends/wavefront"],
    wavefrontHost: "WAVEFRONT_HOST",
    wavefrontPort: 2003,
    wavefrontTagPrefix: '~',
    keyNameSanitize: false,
    port: 8125,
    flushInterval: 30000,
    deleteSets: true,
    graphite: {
        globalPrefix: "stats",
        legacyNamespace: false
    }
}
