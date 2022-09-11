export class ProductOptions {
    constructor(element) {
        this.element = element;
        this.productSelect =  this.element.querySelector(".js-product-select");
        this.variantOptions =  this.element.querySelectorAll(".js-product-variant");
        this.prices          =  this.element.querySelectorAll(".js-product-price");
        this.submit =  this.element.querySelector(".js-product-form-submit");
        this.variantData = window.product.variants;
        this.selectedValues = window.product.selectedValues;
        this.bindEvents();
    }
    
    bindEvents() {
        this.variantOptions.forEach(select => {
            select.addEventListener("change", () => {
                const optionIndex = select.dataset.option,
                      selectedValue = select.value.replaceAll("*", "");
                this.updateSelected(optionIndex, selectedValue);
                this.updateVariantLabel(select);
            });
        });
    }
    updateSelected (index, value) {
        this.selectedValues[index] = value;
        const valueOption1 = this.selectedValues[0] === undefined ? null : this.selectedValues[0],
              valueOption2 = this.selectedValues[1] === undefined ? null : this.selectedValues[1],
              valueOption3 = this.selectedValues[2] === undefined ? null : this.selectedValues[2],
              emptyValues = this.selectedValues.length - this.selectedValues.filter((el) => el !== null).length;
        let optionIndex = Number(index) + 1;
        if(this.selectedValues.length - 1 === index) optionIndex = Math.abs(Number(index) - 1);
        if(emptyValues === 1) this.selectedValues.forEach((item, index) => { if(item === null) optionIndex = index });
        this.updateOption(optionIndex, valueOption1, valueOption2, valueOption3);
        if(emptyValues === 0){
            const variant = this.variantData.filter((variant) => variant.option1 === valueOption1 && variant.option2 === valueOption2 && variant.option3 === valueOption3)[0];
            if(variant !== undefined && typeof variant.id === "number"){
                this.updateProductSelect(variant.id, variant.available);
            }
        }
    }

    updateOption (index, value1, value2, value3) {
        let variants;
        switch(index) {
            case 2:
                variants = this.variantData.filter((variant) => variant.option1 === value1 && variant.option2 === value2);
                break;
            case 1:
                variants = this.variantData.filter((variant) => variant.option1 === value1 && variant.option3 === value3);
                break;
            default:
                variants = this.variantData.filter((variant) => variant.option2 === value2 && variant.option3 === value3);
        }
        this.variantOptions.forEach(option => {
            if(option.dataset.option === index) option.disabled = true;
        });
        if(variants.length > 0){
            variants.forEach(variant => {
                const optionIndex = `option${index + 1}`;
                let availableOption = null;
                if(variant[optionIndex] !== null){
                    availableOption = this.element.querySelectorAll(`.js-product-variant[value="${variant[optionIndex].replaceAll("", "*")}"][data-option="${index}"]`, this.element);
                }
                if(availableOption !== null){
                    if(variant.available) {
                        availableOption.disabled = false;
                    }else{
                        if(availableOption.checked === true){
                            availableOption.checked = false;
                            this.updateVariantLabel(availableOption, true);
                        }
                        availableOption.disabled = true;
                    }
                }
            });
        }
    }
    updateVariantLabel (select, disabled = false) {
        const labelValue = select.closest(".js-variant-row").querySelector(".js-label-value");
        let {value} = select;
        if(select.dataset.color !== undefined){
            value = `<span class="bg-${select.dataset.color}"></span> ${value}`;
        }
        if(disabled !== true){
            labelValue.innerHTML = value.replaceAll("*", "");
        }
    }
    updateProductSelect (selectedVariantId, available) {
        this.productSelect.value = selectedVariantId;
        if (available) {
            this.submit.disabled = false;
        } else {
            this.submit.disabled = true;
        }
    }
}