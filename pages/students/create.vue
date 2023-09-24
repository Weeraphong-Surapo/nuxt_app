<template>
    <div>
        <div class="card">
            <div class="flex justify-between">
                <h4>Add Student </h4>
                <NuxtLink to="/students" class="btn-secondary">Back</NuxtLink>
            </div>
            <div v-if="isLoading">
                <Loading :title="isLoadingText" />
            </div>
            <div v-else>
                <form action="" @submit.prevent="saveStudent">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <div class="mb-3">
                            <label for="" class="lable-form">Name</label>
                            <input type="text" v-model="students.name" class="form-control" placeholder="Enter Name" @keyup="clsError('name')">
                            <div class="text-error" v-if="validationErrors.name">{{ validationErrors.name.join(', ') }}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="lable-form">Course</label>
                            <input type="text" v-model="students.course" class="form-control" placeholder="Enter Course" @keyup="clsError('course')">
                            <div class="text-error" v-if="validationErrors.course">{{ validationErrors.course.join(', ') }}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="lable-form">Email</label>
                            <input type="text" v-model="students.email" class="form-control" placeholder="Enter Email" @keyup="clsError('email')">
                            <div class="text-error" v-if="validationErrors.email">{{ validationErrors.email.join(', ') }}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="" class="lable-form">Phone</label>
                            <input type="text" v-model="students.phone" class="form-control" placeholder="Enter Phone" @keyup="clsError('phone')">
                            <div class="text-error" v-if="validationErrors.phone">{{ validationErrors.phone.join(', ') }}
                            </div>
                        </div>
                        <button class="btn-primary mt-4">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            students: {
                name: '',
                course: '',
                email: '',
                password: '',
            },
            isLoading: false,
            isLoadingText: 'Loading',
            validationErrors: {},
        }
    },
    methods: {
        saveStudent() {
            this.isLoading = true;
            this.isLoadingText = "Saveing";
            axios.post('http://127.0.0.1:8000/api/students', this.students).then(res => {
                console.log(res);
                this.students.name = '';
                this.students.course = '';
                this.students.email = '';
                this.students.password = '';

                this.isLoading = false;
                this.isLoadingText = 'Loading';
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data.data,
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(e => {
                this.validationErrors = e.response.data.errors;
                this.isLoadingText = 'Loading';
                this.isLoading = false;
            })
        },
        clsError(field){
            this.validationErrors[field] = null;
        }
    }
}

</script>

<style lang="scss" scoped></style>