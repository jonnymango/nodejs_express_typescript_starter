"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.set('strictQuery', true);
dotenv_1.default.config();
const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = process.env;
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    //const options: ConnectOptions = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };
    //await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    yield mongoose_1.default.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
        .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
        .catch((err) => {
        console.error('Error connecting to mongo', err.reason);
    });
    //console.log("db connected")
});
exports.connectToDatabase = connectToDatabase;
