initSidebarItems({"enum":[["BlockID","Uniquely identifies block."],["BlockImportError","Error dedicated to import block function"],["BlockStatus","General block status"],["DatabaseCompactionProfile","Client state db compaction profile"],["EachBlockWith","Used for generating test client blocks."],["Error","Client configuration errors."],["Mode","Operating mode for the client."],["Switch","3-value enum."],["TransactionID","Uniquely identifies transaction."],["TransactionImportError","Api-level error for transaction import"],["TransactionImportResult","Represents the result of importing transaction."]],"fn":[["append_path","Append a path element to the given path and return the string."]],"mod":[["chain_notify","Chain notify interface"]],"struct":[["BlockChainCacheSize","Represents blockchain's in-memory cache size in bytes."],["BlockChainInfo","Information about the blockchain gathered together."],["CallAnalytics","Options concerning what analytics we run on the call."],["Client","Blockchain database client backed by a persistent database. Owns and manages a blockchain and a block queue. Call `import_block()` to import a block asynchronously; `flush_queue()` flushes the queue."],["ClientConfig","Client configuration. Includes configs for all sub-systems."],["ClientReport","Report on the status of a client."],["Config","Blockchain configuration."],["EnvInfo","Information concerning the execution environment for a message-call/contract-creation."],["Executed","Transaction execution receipt."],["Executive","Transaction executor."],["RemoteClient",""],["TestBlockChainClient","Test client."],["TraceFilter","Easy to use trace filter."],["TraceId","Uniquely identifies Trace."],["TransactOptions","Transaction execution options."],["UncleID","Uniquely identifies Uncle."]],"trait":[["BlockChainClient","Blockchain database client. Owns and manages a blockchain and a block queue."],["MiningBlockChainClient","Extended client interface used for mining"]],"type":[["LastHashes","Simple vector of hashes, should be at most 256 items large, can be smaller if being used for a block whose number is less than 257."]]});