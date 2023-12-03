<script>
        // JavaScript functions for the gallery

        function openModal(imageSrc) {
            const modal = document.getElementById("myModal");
            const modalImage = document.getElementById("modal-image");
            
            modal.style.display = "block";
            modalImage.src = imageSrc;
        }

        function closeModal() {
            const modal = document.getElementById("myModal");
            modal.style.display = "none";
        }

        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            const modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>