import { ASTType } from "../ast/ASTType";
import matlabVisitor from "./antlrjs/matlabVisitor";

export class Visitor extends matlabVisitor {
    visitChildren: any;

    // Visit a parse tree produced by p4Parser#atom_element_div.
    visitAtom_element_div(ctx: any) {
        ctx.type = ASTType.ELEMENT_DIV;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_element_power.
    visitAtom_element_pow(ctx: any) {
        ctx.type = ASTType.ELEMENT_POW;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_element_mult.
    visitAtom_element_mul(ctx: any) {
        ctx.type = ASTType.ELEMENT_MUL;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_element_transpose.
    visitAtom_element_transpose(ctx: any) {
        ctx.type = ASTType.ELEMENT_TRANSPOSE;
        return this.visitChildren(ctx);
    }

    visitAtom_element_dot(ctx: any) {
        ctx.type = ASTType.ELEMENT_DOT;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_assign.
    visitAtom_assign(ctx: any) {
        ctx.type = ASTType.ASSIGN;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#st_assign.
    visitSt_assign(ctx: any) {
        ctx.type = ASTType.ST_ASSIGN;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_div.
    visitAtom_div(ctx: any) {
        ctx.type = ASTType.DIV;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_minus.
    visitAtom_minus(ctx: any) {
        ctx.type = ASTType.MINUS;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_plus.
    visitAtom_plus(ctx: any) {
        ctx.type = ASTType.PLUS;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_mult.
    visitAtom_mult(ctx: any) {
        ctx.type = ASTType.MUL;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_power.
    visitAtom_pow(ctx: any) {
        ctx.type = ASTType.POW;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_dot.
    visitAtom_dot(ctx: any) {
        ctx.type = ASTType.DOT;
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by p4Parser#atom_transpose.
    visitAtom_transpose(ctx: any) {
        ctx.type = ASTType.TRANSPOSE;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_integer.
    visitAtom_integer(ctx: any) {
        ctx.type = ASTType.INT;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_string.
    visitAtom_string(ctx: any) {
        ctx.type = ASTType.STRING;
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by p4Parser#atom_var.
    visitAtom_var(ctx: any) {
        ctx.type = ASTType.VAR;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_float.
    visitAtom_float(ctx: any) {
        ctx.type = ASTType.FLOAT;
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by p4Parser#atom_imaginary.
    visitAtom_imaginary(ctx: any) {
        ctx.type = ASTType.COMPLEX;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#xpr_array.
    visitXpr_array(ctx: any) {
        ctx.type = ASTType.ARRAY;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_semi_colon.
    visitAtom_semi_colon(ctx: any) {
        ctx.type = ASTType.SEMI_COLON;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#xpr_tree.
    visitXpr_tree(ctx: any) {
        ctx.type = ASTType.XPR_TREE;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_colon.
    visitAtom_colon(ctx: any) {
        ctx.type = ASTType.COLON;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_lbrack.
    visitAtom_lbrack(ctx: any) {
        ctx.type = ASTType.LBRACK;
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by p4Parser#atom_rbrack.
    visitAtom_rbrack(ctx: any) {
        ctx.type = ASTType.RBRACK;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#xpr_array_index.
    visitXpr_array_index(ctx: any) {
        ctx.type = ASTType.ARRAY_INDEX;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#atom_index_all.
    visitAtom_index_all(ctx: any) {
        ctx.type = ASTType.ARRAY_INDEX_ALL;
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by p4Parser#xpr_function.
    visitXpr_function(ctx: any) {
        ctx.type = ASTType.FUNCTION;
        return this.visitChildren(ctx);
    }


}
