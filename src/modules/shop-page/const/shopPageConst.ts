import style from "../presentation/components/filter-types/filterTypes.module.css";

export const openCloseMenuHandler = (event: any) => {
    event.target.nextElementSibling.classList.toggle(style.open);
}

export const chooseSort = (event: any) => {
    const choice: string = event.target.textContent;
    const listId = event.target.parentElement;
    const listHead = listId.previousElementSibling;
    const input: HTMLInputElement = listHead.previousElementSibling;
    input.value = choice;

    // @ts-ignore
    listId.childNodes.forEach(item => {
        if (item.textContent === listHead.textContent) {
            // @ts-ignore
            item.classList.remove(style.chosen);
        }
    })
    listHead.textContent = choice;
    event.target.classList.add(style.chosen);
    event.target.parentElement.classList.toggle(style.open);

}