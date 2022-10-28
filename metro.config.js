module.exports = {resolver: {
    extraNodeModules: {
        stream: require.resolve("readable-stream"),
        fs: require.resolve("react-native-fs"),
        url: require.resolve("native-url"),
        util: require.resolve("react-native-util"),
        child_process: require.resolve("react-native-childprocess"),
        os: require.resolve("react-native-os"),
        path: require.resolve("react-native-path"),
        events: require.resolve("react-native-events"),
        https: require.resolve("react-native-https"),
        zlib: require.resolve("react-zlib-js"),
        process: require.resolve("react-native-process-shim"),
        crypto: require.resolve("react-native-crypto"),
        net: require.resolve("react-native-net"),
        tls: require.resolve("react-native-tls"),
        http: require.resolve("react-native-http"),
    }
}}