import create, { GetState, SetState } from "zustand";
import { ResultType, Variable } from "../../core/interpreter/Interpreter";

export interface VariableStore {
    variables: Array<Variable>;
    add: (name: string, value: any) => void;
    update: (name: string, value: any) => void;
    delete: (name: string) => void;
    deleteAll: () => void;
    updateAll: (variables: Array<Variable>) => void;
};

/**
 * 存放命令行编辑器的变量区
 */
export const useVariableStore = create<VariableStore>((set: SetState<VariableStore>, _: GetState<VariableStore>) => ({
    variables: [],
    add: (name: string, value: any) => {
        set((state) => ({
            variables: [
                ...state.variables,
                {
                    type: ResultType.NORMAL,
                    name,
                    value
                }
            ],
        }));
    },
    update: (name: string, value: any) => {
        set((state) => ({
            variables: state.variables.map((variable) =>
                variable.name === name
                    ? { type: ResultType.NORMAL, name, value }
                    : variable
            ),
        }));
    },
    delete: (name: string) => {
        set((state) => ({
            variables: state.variables.filter((variable) => variable.name !== name),
        }));
    },
    deleteAll: () => {
        set(() => ({
            variables: [],
        }));
    },
    updateAll: (variables: Array<Variable>) => {
        set({ variables });
    }
}));
