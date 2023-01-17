export { default as NativeTopView, Props as TopViewProps } from './NativeTopView';

// import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// // Import the native module. On web, it will be resolved to NativeTopView.web.ts
// // and on native platforms to NativeTopView.ts
// import NativeTopViewModule from './NativeTopViewModule';
// import NativeTopView from './NativeTopView';
// import { ChangeEventPayload, NativeTopViewProps } from './NativeTopView.types';

// // Get the native constant value.
// export const PI = NativeTopViewModule.PI;

// export function hello(): string {
//   return NativeTopViewModule.hello();
// }

// export async function setValueAsync(value: string) {
//   return await NativeTopViewModule.setValueAsync(value);
// }

// const emitter = new EventEmitter(NativeTopViewModule ?? NativeModulesProxy.NativeTopView);

// export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
//   return emitter.addListener<ChangeEventPayload>('onChange', listener);
// }

// export { NativeTopView, NativeTopViewProps, ChangeEventPayload };
