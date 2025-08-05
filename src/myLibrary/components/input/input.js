import { useRef } from "react"
import classes from "./input.module.css"
function Input({
    id,
    type,
    name,
    placeholder,
    required,
    value,
    handleOnChange,
    customClasses
}) {
    const placeholderRef = useRef(null)
    const inputRef = useRef(null)

    const togglePlaceholderClasses = (oldClass, newClass) => {
        if (placeholderRef.current.classList.contains(classes[oldClass])) {
            placeholderRef.current.classList.remove(classes[oldClass])
        }
        placeholderRef.current.classList.add(classes[newClass])
    }

    const togglePlaceholderAnimation = (
        oldAnimationClass,
        newAnimationClass,
        placeholderOldColor,
        placeholderNewColor
    ) => {
        togglePlaceholderClasses(oldAnimationClass, newAnimationClass)
        togglePlaceholderClasses(placeholderOldColor, placeholderNewColor)
    }

    const handlePlaceHolderAnimation = (
        oldAnimationClass,
        newAnimationClass,
        placeholderOldColor,
        placeholderNewColor,
        focus
    ) => {
        if (!inputRef.current.value) {
            togglePlaceholderAnimation(
                oldAnimationClass,
                newAnimationClass,
                placeholderOldColor,
                placeholderNewColor
            )
            focus && inputRef.current.focus()
            !focus && inputRef.current.blur()
        }
        else {
            placeholderRef.current.classList.remove(classes[placeholderOldColor])
            placeholderRef.current.classList.add(classes[placeholderNewColor])
        }
    }

    const onFocus = () => {
        handlePlaceHolderAnimation(
            "placeholderDown",
            "placeholderUp",
            "placeholderUpBlack",
            "placeholderUpBlue",
            true
        )
    }

    const onBlur = () => {
        handlePlaceHolderAnimation(
            "placeholderUp",
            "placeholderDown",
            "placeholderUpBlue",
            "placeholderUpBlack",
            false
        )
    }

    return (
        <div
            className={[
                classes.inputContainer,
                customClasses && customClasses
            ].join(' ')
            }
            onClick={onFocus}
        >
            <input
                id={id && id}
                className={classes.input}
                type={type}
                name={name}
                required={required && required}
                value={value && value}
                onChange={handleOnChange && handleOnChange}
                onBlur={onBlur}
                ref={inputRef}
            />
            <div
                className={classes.placeholder}
                ref={placeholderRef}
            >
                {placeholder && placeholder}
            </div>
        </div>
    )
}

export default Input