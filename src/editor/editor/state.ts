import create, { SetState } from "zustand";
import { CommandType } from "./Command";

export interface PlotStore {
    plots: Array<PlotData>;
    add: (plot: PlotData) => void;
    delete: (id: string) => void;
    update: (id: string, value: PlotData) => void;
    updateAll: (plots: Array<PlotData>) => void;
};

export interface PlotData {
    id: string;
    data: any[];
    config?: any;
}

/**
 *  绘图数据
 */
export const usePlotStore = create<PlotStore>((set: SetState<PlotStore>) => ({
    plots: [],
    add: (plot2d: PlotData) => {
        set((state) => ({
            plots: [
                ...state.plots,
                {
                    id: plot2d.id,
                    data: plot2d.data,
                    config: plot2d.config,
                }
            ],
        }));
    },
    update: (id: string, value: PlotData) => {
        set((state) => ({
            plots: state.plots.map((plot) =>
                plot.id === id ? value : plot
            ),
        }));
    },
    delete: (id: string) => {
        set((state) => ({
            plots: state.plots.filter((value: PlotData) => value.id !== id),
        }));
    },
    updateAll: (plots: Array<PlotData>) => {
        set({ plots });
    }
}));

/**
 * 最小化组件
 */

export interface MinimizeState {
    id: string;
}

interface MinimizeStore {
    mins: Array<MinimizeState>;
    add: (min: MinimizeState) => void;
    delete: (id: string) => void;
};

export const useMinimizeStore = create<MinimizeStore>((set: SetState<MinimizeStore>) => ({
    mins: [],
    add: (min: MinimizeState) => {
        set((state) => ({
            mins: [
                ...state.mins,
                {
                    id: min.id,
                }
            ],
        }));
    },
    delete: (id: string) => {
        set((state) => ({
            mins: state.mins.filter((value: MinimizeState) => value.id !== id),
        }));
    },
}));

// 向编辑器发送命令
interface EditorCommandState {
    cmds: Array<CommandType>;
    add: (name: CommandType) => void;
    delete: (name: CommandType) => void;
}

export const useEditorCommandStore = create<EditorCommandState>((set: SetState<EditorCommandState>) => ({
    cmds: [],
    add: (name: CommandType) => {
        set((state) => ({
            cmds: [
                ...state.cmds,
                name,
            ],
        }));
    },
    delete: (name: string) => {
        set((state) => ({
            cmds: state.cmds.filter((value: CommandType) => value !== name),
        }));
    },
}));

///https://javascript.plainenglish.io/using-zustand-and-typescript-to-make-a-to-do-list-in-react-fe4a41e76748
