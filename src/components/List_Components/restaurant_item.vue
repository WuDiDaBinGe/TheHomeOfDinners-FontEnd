<template>
    <div>
    <div class="company_listing isotope-item high" v-for="item in [1,2,3,4,5]">
        <div class="row">
            <div class="col-md-9">
                <div class="company_info">
                    <figure><a href="{% url 'reviews-page' %}?name= Restaurant.name "><img src=" Restaurant.photo " alt="" width="25%"></a></figure>
                    <h3> Restaurant.name </h3>
                    <p> Restaurant.food </p>
                    <p> Restaurant.address </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-center float-lg-right">
                <span class="rating"><strong>Restaurant.reviewnum  Restaurant.score  Restaurant.rank </strong><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star"></i><i class="icon_star empty"></i></span>
                <a href="{% url 'reviews-page' %}" class="btn_1 small">Read more</a>
                </div>
            </div>
        </div>
    </div>
    <!-- /company_listing -->
    </div> 
</template>

<script>
export default {
    name:"restaurant_item",
}
</script>

<style scoped>

</style>