import {ScreenSize} from "@net-boost-media/types/ui/ui.types";

export interface UIState {
  screenSize: ScreenSize;
  globalLoading: boolean;
}

export const initialUIState: UIState = {
  screenSize: ScreenSize.Desktop,
  globalLoading: false,
};
