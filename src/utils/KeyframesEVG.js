class KeyframesEVG {
    constructor({
        Name = 'default',
        Duration = 300,
        Body,
        Timingf = 'ease',
        Delay = '0s',
        IterationCount = '1',
        Direction = 'normal',
        FillMode = 'none',
        PlayState = 'running',
    } = {}) {
        this.Name = Name
        this.Duration = `${Duration}ms`
        this.Body = Body
        this.Timingf = Timingf
        this.Delay = `${Delay}ms`
        this.IterationCount = IterationCount
        this.Direction = Direction
        this.FillMode = FillMode
        this.PlayState = PlayState
        this.ClassName = `.KeyframesEVG-${this.Name}`
        /* @keyframes 
            duration | timing-function | delay | 
            iteration-count | direction | fill-mode | 
            play-state | name 
        */
        this.AnimationCSS = `${this.Duration} ${this.Timingf} ${this.Delay} ${this.IterationCount} ${this.Direction} ${this.FillMode} ${this.PlayState} ${this.Name}`

        this.Render()
    }

    Remove = () => {
        let KeyframesEVG = document.head.querySelector(this.ClassName)
        KeyframesEVG.remove()
    }
    Render = () => {

        let KeyframesEVG = document.head.querySelector(this.ClassName)

        if (!KeyframesEVG) {
            KeyframesEVG = document.createElement('style')
            KeyframesEVG.classList.add(`KeyframesEVG-${this.Name}`)
        }

        KeyframesEVG.textContent = `
            @keyframes ${this.Name} {
                ${this.Body}
            }
        `
        document.head.appendChild(KeyframesEVG)
    }
}

export default KeyframesEVG