import { Dispatch } from "react";

export interface INavBar {
    title: string;
}

export interface IAddTodo {
    onSubmit: Dispatch<React.SetStateAction<string>>;
}

export interface ITodo {
    todo: object;
    onRemove: Dispatch<React.SetStateAction<string>>;
}