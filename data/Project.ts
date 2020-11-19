export enum BlockType {
    PROJECT = "PROJECT_BLOCK",
    HEADER = "HEADER_BLOCK",
    TEXT = "TEXT_BLOCK",
    BUTTON = "BUTTON_BLOCK",
    COLUMNS = "COLUMNS_BLOCK",
    DIVIDER = "DIVIDER_BLOCK",
    DISCOUNT = "DISCOUNT_BLOCK"
}


export interface Block {
    type: BlockType
    movable: boolean
    removable: boolean
    children?: Block[]
    data?: unknown
}


export interface ProjectBlock extends Block {
    type: BlockType.PROJECT
    version: string
    movable: false
    removable: false
    children: Block[]
}


export interface HeaderBlock extends Block {
    type: BlockType.HEADER
    movable: false
    removable: false
    data: {
        source: string | null
    }
}


export interface TextBlock extends Block {
    type: BlockType.TEXT
    movable: true
    removable: true
    data: {
        anchor: string | null
        content: string
        format: string
    }
}


export interface ImageBlock extends Block {
    type: BlockType.TEXT
    movable: true
    removable: true
    data: {
        anchor: string | null
        source: string
    }
}


export interface ButtonBlock extends Block {
    type: BlockType.BUTTON
    movable: true
    removable: true
    data: {
        anchor: string | null
        content: string
        textColor: string
        buttonColor: string
    }
}


export interface ColumnsBlock extends Block {
    type: BlockType.COLUMNS
    movable: true
    removable: true
    children: Block[]
    data: {
        layout: number[][]
    }
}


export interface DividerBlock extends Block {
    type: BlockType.DIVIDER
    movable: true
    removable: true
    data: {
        style: string
    }
}


export interface DiscountBlock extends Block {
    type: BlockType.DISCOUNT
    movable: true
    removable: false
    data: {
        amount: number
        currency: string
        uses: number
        validity: number
        services: string[]
    }
}
