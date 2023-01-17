import { ViewProps } from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

export type Props = ViewProps;

const NativeView: React.ComponentType<Props> = requireNativeViewManager('NativeTopView');

export default function NativeTopView(props: Props) {
  return <NativeView {...props} />;
}


// import { requireNativeViewManager } from 'expo-modules-core';
// import * as React from 'react';

// import { NativeTopViewProps } from './NativeTopView.types';

// const NativeView: React.ComponentType<NativeTopViewProps> =
//   requireNativeViewManager('NativeTopView');

// export default function NativeTopView(props: NativeTopViewProps) {
//   return <NativeView {...props} />;
// }
