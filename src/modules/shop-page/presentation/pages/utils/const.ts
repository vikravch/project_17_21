import React from "react";
import style from './const.module.css';

export const closeClickFunction = (event: MouseEvent) => {

    const listener = document.querySelectorAll('.listener');
    const listenerHead = document.querySelectorAll('.listenerHead');

    listener.forEach((item, index) => {
        if (event.target !== item && event.target !== listenerHead[index]) {
            item.classList.remove(style.open);
        }
    })

}

export const openCloseMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as Element;
    const nextSibling = eventTarget.nextElementSibling as Element;
    nextSibling.classList.toggle(style.open);
}

export const chooseSortOrFiltration = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLElement;
    const choice = eventTarget.textContent as string;
    const listId = eventTarget.parentElement as HTMLDivElement;
    const listHead = listId.previousElementSibling as HTMLDivElement;
    const input = listHead.previousElementSibling as HTMLInputElement;

    input.value = choice;
    listId.childNodes.forEach((item: ChildNode) => {
        let element = item as HTMLDivElement;
        if (element.classList.contains(style.chosen)) {
            element.classList.remove(style.chosen);
        }
    })

    listHead.textContent = choice === 'Default' ? 'Sort by' : choice;
    eventTarget.classList.add(style.chosen);
    listId.classList.toggle(style.open);


}