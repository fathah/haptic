// haptics.d.ts

declare namespace Haptics {
  type VibratePattern = number[];

  interface HapticsObject {
    enabled: boolean;
    record: () => void;
    finish: () => VibratePattern;
    fadeIn: (duration: number) => void;
    fadeOut: (duration: number) => void;
    notification: (duration: number) => void;
    heartbeat: (duration: number) => void;
    clunk: (duration: number) => void;
    pwm: (args: number | VibratePattern, on: number, off: number) => void;
    createPatternPWM: (
      on: number,
      off: number
    ) => (args: number | VibratePattern) => void;
    createPattern: (
      ...patterns: Array<number | VibratePattern>
    ) => (args: number | VibratePattern) => void;
    vibrate: (...patterns: VibratePattern[]) => void;
  }
}

export = Haptics;
