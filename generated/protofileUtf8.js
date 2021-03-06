module.exports = `package safemarket;
syntax = "proto3";

message Store {
  required string name = 1;
  required string base = 2;
  required string info = 3;
  repeated StoreProduct products = 4;
  repeated StoreTransport transports = 5;
}

message StoreProduct {
  required string name = 1;
  required string info = 2;
  repeated bytes imageMultihashes = 3 [packed=true];
}

message StoreTransport {
  required string name = 1;
  required string to = 2;
  required string info = 3;
}

message Arbitrator {
  required string name = 1;
  required string info = 2;
}
`
