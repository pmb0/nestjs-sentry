"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectDecoratoryFactory_1 = require("./injectDecoratoryFactory");
const sentry_constants_1 = require("./sentry.constants");
exports.InjectSentry = injectDecoratoryFactory_1.makeInjectableDecorator(sentry_constants_1.SENTRY_TOKEN);
exports.InjectSentryModuleConfig = injectDecoratoryFactory_1.makeInjectableDecorator(sentry_constants_1.SENTRY_MODULE_OPTIONS);
//# sourceMappingURL=sentry.decorator.js.map